import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rubinot-official');
}

export default function LowrateRubinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rubinot-official" />;
}
