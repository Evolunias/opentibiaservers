import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-imperianic');
}

export default function LowrateImperianicKeywordPage() {
  return <StaticKeywordPage slug="lowrate-imperianic" />;
}
