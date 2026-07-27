import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-retro-server-usa');
}

export default function ClassicusRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="classicus-retro-server-usa" />;
}
