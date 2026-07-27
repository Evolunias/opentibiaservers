import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-similar-servers');
}

export default function KasteriaSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-similar-servers" />;
}
