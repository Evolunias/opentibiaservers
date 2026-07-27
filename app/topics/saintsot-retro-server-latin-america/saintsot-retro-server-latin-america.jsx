import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-retro-server-latin-america');
}

export default function SaintsotRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-retro-server-latin-america" />;
}
