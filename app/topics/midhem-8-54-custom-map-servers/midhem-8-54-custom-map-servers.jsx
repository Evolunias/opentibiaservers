import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-54-custom-map-servers');
}

export default function Midhem854CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-54-custom-map-servers" />;
}
