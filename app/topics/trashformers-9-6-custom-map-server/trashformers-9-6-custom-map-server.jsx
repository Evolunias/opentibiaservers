import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-9-6-custom-map-server');
}

export default function Trashformers96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-9-6-custom-map-server" />;
}
