import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-official');
}

export default function ClassickDrakoriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-official" />;
}
