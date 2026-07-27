import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-low-exp-server-mexico');
}

export default function TibiameLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiame-low-exp-server-mexico" />;
}
