import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-kasteria-server');
}

export default function LowrateKasteriaServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-kasteria-server" />;
}
