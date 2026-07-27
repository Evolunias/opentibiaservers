import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-14-custom-map-servers');
}

export default function Trashformers14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="trashformers-14-custom-map-servers" />;
}
