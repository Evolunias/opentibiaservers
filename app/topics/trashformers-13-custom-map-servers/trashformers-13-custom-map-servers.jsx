import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-13-custom-map-servers');
}

export default function Trashformers13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="trashformers-13-custom-map-servers" />;
}
