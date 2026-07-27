import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-retro-server-latin-america');
}

export default function AureraGlobalRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-retro-server-latin-america" />;
}
