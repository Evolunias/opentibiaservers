import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-13-custom-map-server');
}

export default function Trashformers13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-13-custom-map-server" />;
}
