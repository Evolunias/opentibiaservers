import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-kasteria-ot');
}

export default function LowrateKasteriaOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-kasteria-ot" />;
}
