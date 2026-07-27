import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-mexico-server');
}

export default function KasteriaMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-mexico-server" />;
}
