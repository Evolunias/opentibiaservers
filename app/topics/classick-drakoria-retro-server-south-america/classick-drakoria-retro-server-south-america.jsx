import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-retro-server-south-america');
}

export default function ClassickDrakoriaRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-retro-server-south-america" />;
}
