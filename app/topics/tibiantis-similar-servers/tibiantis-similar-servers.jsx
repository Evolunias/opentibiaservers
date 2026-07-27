import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-similar-servers');
}

export default function TibiantisSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-similar-servers" />;
}
