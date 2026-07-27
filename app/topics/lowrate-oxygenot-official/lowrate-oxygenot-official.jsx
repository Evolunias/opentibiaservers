import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oxygenot-official');
}

export default function LowrateOxygenotOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oxygenot-official" />;
}
