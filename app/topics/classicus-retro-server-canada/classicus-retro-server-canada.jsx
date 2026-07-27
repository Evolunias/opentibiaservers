import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-retro-server-canada');
}

export default function ClassicusRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="classicus-retro-server-canada" />;
}
