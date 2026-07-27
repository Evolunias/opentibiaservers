import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-unline-website');
}

export default function OfficialUnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-unline-website" />;
}
