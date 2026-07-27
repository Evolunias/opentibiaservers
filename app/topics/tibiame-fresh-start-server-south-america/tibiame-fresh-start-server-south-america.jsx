import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-fresh-start-server-south-america');
}

export default function TibiameFreshStartServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-fresh-start-server-south-america" />;
}
