import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-14-custom-map-server');
}

export default function Trashformers14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-14-custom-map-server" />;
}
