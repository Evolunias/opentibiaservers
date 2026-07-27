import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-13-custom-map-servers');
}

export default function Shadowcores13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-13-custom-map-servers" />;
}
