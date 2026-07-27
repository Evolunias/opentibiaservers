import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-high-exp-server-latin-america');
}

export default function ArcaniarlHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-high-exp-server-latin-america" />;
}
