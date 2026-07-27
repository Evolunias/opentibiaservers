import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-south-america-servers');
}

export default function TibiameSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-south-america-servers" />;
}
