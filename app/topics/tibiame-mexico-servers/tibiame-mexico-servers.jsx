import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-mexico-servers');
}

export default function TibiameMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-mexico-servers" />;
}
