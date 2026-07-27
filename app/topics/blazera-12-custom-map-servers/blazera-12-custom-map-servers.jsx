import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-12-custom-map-servers');
}

export default function Blazera12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-12-custom-map-servers" />;
}
