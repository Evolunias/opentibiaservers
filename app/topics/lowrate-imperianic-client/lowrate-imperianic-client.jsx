import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-imperianic-client');
}

export default function LowrateImperianicClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-imperianic-client" />;
}
