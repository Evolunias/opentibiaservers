import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-retro-server-latin-america');
}

export default function ArcaniarlRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-retro-server-latin-america" />;
}
