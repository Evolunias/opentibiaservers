import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-12-custom-map-servers');
}

export default function Medivia12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-12-custom-map-servers" />;
}
