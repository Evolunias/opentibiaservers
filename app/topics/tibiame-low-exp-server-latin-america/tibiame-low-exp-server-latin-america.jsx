import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-low-exp-server-latin-america');
}

export default function TibiameLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-low-exp-server-latin-america" />;
}
