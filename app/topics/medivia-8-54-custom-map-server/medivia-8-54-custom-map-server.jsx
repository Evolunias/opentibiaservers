import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-54-custom-map-server');
}

export default function Medivia854CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-54-custom-map-server" />;
}
