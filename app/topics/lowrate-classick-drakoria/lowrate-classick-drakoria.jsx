import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classick-drakoria');
}

export default function LowrateClassickDrakoriaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classick-drakoria" />;
}
