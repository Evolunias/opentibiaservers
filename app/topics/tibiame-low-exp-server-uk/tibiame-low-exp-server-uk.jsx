import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-low-exp-server-uk');
}

export default function TibiameLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiame-low-exp-server-uk" />;
}
