import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-brazil-server');
}

export default function TibiameBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-brazil-server" />;
}
