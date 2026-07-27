import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-midhem-website');
}

export default function OfficialMidhemWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-midhem-website" />;
}
