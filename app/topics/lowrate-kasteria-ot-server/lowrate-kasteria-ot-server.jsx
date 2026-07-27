import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-kasteria-ot-server');
}

export default function LowrateKasteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-kasteria-ot-server" />;
}
