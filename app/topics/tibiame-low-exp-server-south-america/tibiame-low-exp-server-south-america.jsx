import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-low-exp-server-south-america');
}

export default function TibiameLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-low-exp-server-south-america" />;
}
