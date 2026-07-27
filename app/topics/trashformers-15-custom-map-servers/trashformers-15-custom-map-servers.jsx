import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-15-custom-map-servers');
}

export default function Trashformers15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="trashformers-15-custom-map-servers" />;
}
