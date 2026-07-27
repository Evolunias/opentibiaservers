import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rubinot-website');
}

export default function OfficialRubinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-rubinot-website" />;
}
