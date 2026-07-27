import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-retro-server-uk');
}

export default function ClassicusRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="classicus-retro-server-uk" />;
}
