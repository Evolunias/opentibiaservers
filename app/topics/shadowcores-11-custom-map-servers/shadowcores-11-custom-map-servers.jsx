import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-11-custom-map-servers');
}

export default function Shadowcores11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-11-custom-map-servers" />;
}
