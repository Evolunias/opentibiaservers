import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-7-1-custom-map-server');
}

export default function Trashformers71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-7-1-custom-map-server" />;
}
