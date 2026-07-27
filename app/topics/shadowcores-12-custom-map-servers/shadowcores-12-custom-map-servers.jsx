import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-12-custom-map-servers');
}

export default function Shadowcores12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-12-custom-map-servers" />;
}
