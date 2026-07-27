import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-retro-server-germany');
}

export default function ClassicusRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classicus-retro-server-germany" />;
}
