import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-brazil-servers');
}

export default function TibiameBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-brazil-servers" />;
}
