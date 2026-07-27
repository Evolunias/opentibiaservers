import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-98-custom-map-servers');
}

export default function Medivia1098CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-98-custom-map-servers" />;
}
