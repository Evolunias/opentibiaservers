import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-54-custom-map-server');
}

export default function Cyntara854CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-54-custom-map-server" />;
}
