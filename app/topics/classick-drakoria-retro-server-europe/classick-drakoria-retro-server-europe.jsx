import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-retro-server-europe');
}

export default function ClassickDrakoriaRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-retro-server-europe" />;
}
