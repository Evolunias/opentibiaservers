import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-8-0-custom-map-server');
}

export default function Trashformers80CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-8-0-custom-map-server" />;
}
