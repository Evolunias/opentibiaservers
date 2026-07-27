import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classick-drakoria-ot');
}

export default function LowrateClassickDrakoriaOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classick-drakoria-ot" />;
}
