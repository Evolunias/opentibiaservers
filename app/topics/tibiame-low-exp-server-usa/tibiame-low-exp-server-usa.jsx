import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-low-exp-server-usa');
}

export default function TibiameLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-low-exp-server-usa" />;
}
