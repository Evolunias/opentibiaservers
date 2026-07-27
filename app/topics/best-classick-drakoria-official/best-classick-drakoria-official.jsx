import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classick-drakoria-official');
}

export default function BestClassickDrakoriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-classick-drakoria-official" />;
}
