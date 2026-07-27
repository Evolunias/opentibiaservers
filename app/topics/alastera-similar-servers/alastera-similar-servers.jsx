import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-similar-servers');
}

export default function AlasteraSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-similar-servers" />;
}
