import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oxygenot-website');
}

export default function OfficialOxygenotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-oxygenot-website" />;
}
