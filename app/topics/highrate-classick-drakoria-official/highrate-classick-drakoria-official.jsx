import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classick-drakoria-official');
}

export default function HighrateClassickDrakoriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-classick-drakoria-official" />;
}
