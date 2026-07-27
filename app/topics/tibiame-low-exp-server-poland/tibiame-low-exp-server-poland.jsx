import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-low-exp-server-poland');
}

export default function TibiameLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiame-low-exp-server-poland" />;
}
