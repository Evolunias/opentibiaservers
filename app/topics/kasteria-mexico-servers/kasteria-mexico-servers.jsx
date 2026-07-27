import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-mexico-servers');
}

export default function KasteriaMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-mexico-servers" />;
}
