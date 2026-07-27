import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-6-custom-map-servers');
}

export default function Shadowcores76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-6-custom-map-servers" />;
}
