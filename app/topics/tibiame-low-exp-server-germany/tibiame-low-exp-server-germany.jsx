import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-low-exp-server-germany');
}

export default function TibiameLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiame-low-exp-server-germany" />;
}
