import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-kasteria-ots');
}

export default function LowrateKasteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-kasteria-ots" />;
}
