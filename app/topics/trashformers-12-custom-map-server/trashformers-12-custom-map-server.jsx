import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-12-custom-map-server');
}

export default function Trashformers12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-12-custom-map-server" />;
}
