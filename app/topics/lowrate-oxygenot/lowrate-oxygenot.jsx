import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oxygenot');
}

export default function LowrateOxygenotKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oxygenot" />;
}
