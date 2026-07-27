import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-low-exp-server-france');
}

export default function TibiameLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiame-low-exp-server-france" />;
}
