import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-low-exp-server-argentina');
}

export default function TibiameLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-low-exp-server-argentina" />;
}
