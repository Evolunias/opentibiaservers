import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-low-exp-server-europe');
}

export default function TibiameLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiame-low-exp-server-europe" />;
}
