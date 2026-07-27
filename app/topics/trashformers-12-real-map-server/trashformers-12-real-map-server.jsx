import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-12-real-map-server');
}

export default function Trashformers12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-12-real-map-server" />;
}
