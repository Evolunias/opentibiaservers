import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-low-exp-server-brazil');
}

export default function TibiameLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiame-low-exp-server-brazil" />;
}
