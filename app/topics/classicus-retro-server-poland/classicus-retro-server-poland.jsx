import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-retro-server-poland');
}

export default function ClassicusRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="classicus-retro-server-poland" />;
}
