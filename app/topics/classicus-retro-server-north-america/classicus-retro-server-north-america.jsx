import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-retro-server-north-america');
}

export default function ClassicusRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-retro-server-north-america" />;
}
