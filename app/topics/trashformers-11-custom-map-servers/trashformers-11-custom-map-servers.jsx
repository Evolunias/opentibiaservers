import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-11-custom-map-servers');
}

export default function Trashformers11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="trashformers-11-custom-map-servers" />;
}
