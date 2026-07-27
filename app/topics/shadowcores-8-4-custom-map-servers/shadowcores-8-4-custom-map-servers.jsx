import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-4-custom-map-servers');
}

export default function Shadowcores84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-4-custom-map-servers" />;
}
