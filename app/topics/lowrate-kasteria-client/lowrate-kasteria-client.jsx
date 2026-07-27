import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-kasteria-client');
}

export default function LowrateKasteriaClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-kasteria-client" />;
}
