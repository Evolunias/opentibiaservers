import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rubinot');
}

export default function LowrateRubinotKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rubinot" />;
}
