import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-retro-server-latin-america');
}

export default function EvoluniaRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-retro-server-latin-america" />;
}
