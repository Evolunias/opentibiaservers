import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-retro-server-france');
}

export default function ClassicusRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classicus-retro-server-france" />;
}
