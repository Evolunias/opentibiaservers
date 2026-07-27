import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-4-custom-map-servers');
}

export default function Medivia84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-4-custom-map-servers" />;
}
