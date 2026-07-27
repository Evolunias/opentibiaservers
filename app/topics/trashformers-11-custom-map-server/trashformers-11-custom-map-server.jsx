import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-11-custom-map-server');
}

export default function Trashformers11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-11-custom-map-server" />;
}
