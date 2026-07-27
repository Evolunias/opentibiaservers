import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classick-drakoria-official');
}

export default function LowrateClassickDrakoriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classick-drakoria-official" />;
}
