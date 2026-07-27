import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rubinot-website');
}

export default function LowrateRubinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rubinot-website" />;
}
