import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realesta-website');
}

export default function OfficialRealestaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-realesta-website" />;
}
