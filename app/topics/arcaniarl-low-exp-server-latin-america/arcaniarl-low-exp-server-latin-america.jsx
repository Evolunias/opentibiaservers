import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-low-exp-server-latin-america');
}

export default function ArcaniarlLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-low-exp-server-latin-america" />;
}
