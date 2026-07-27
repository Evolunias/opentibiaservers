import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-fresh-start-server-latin-america');
}

export default function NoxiousotFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-fresh-start-server-latin-america" />;
}
