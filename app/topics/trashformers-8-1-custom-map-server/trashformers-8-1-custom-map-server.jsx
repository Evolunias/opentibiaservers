import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-8-1-custom-map-server');
}

export default function Trashformers81CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-8-1-custom-map-server" />;
}
