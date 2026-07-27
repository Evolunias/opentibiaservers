import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-mexico-server');
}

export default function TibiameMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-mexico-server" />;
}
