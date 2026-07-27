import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-8-4-custom-map-server');
}

export default function Trashformers84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-8-4-custom-map-server" />;
}
