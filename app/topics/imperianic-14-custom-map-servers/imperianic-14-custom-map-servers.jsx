import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-14-custom-map-servers');
}

export default function Imperianic14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-14-custom-map-servers" />;
}
