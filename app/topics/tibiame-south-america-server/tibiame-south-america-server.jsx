import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-south-america-server');
}

export default function TibiameSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-south-america-server" />;
}
