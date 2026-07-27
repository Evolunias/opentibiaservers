import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-10-98-custom-map-servers');
}

export default function Midhem1098CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-10-98-custom-map-servers" />;
}
