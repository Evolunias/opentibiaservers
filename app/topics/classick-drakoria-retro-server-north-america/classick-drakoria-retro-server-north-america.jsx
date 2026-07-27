import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-retro-server-north-america');
}

export default function ClassickDrakoriaRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-retro-server-north-america" />;
}
