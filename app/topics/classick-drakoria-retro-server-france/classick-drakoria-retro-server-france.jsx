import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-retro-server-france');
}

export default function ClassickDrakoriaRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-retro-server-france" />;
}
