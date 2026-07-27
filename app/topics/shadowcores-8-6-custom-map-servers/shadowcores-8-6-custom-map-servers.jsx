import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-6-custom-map-servers');
}

export default function Shadowcores86CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-6-custom-map-servers" />;
}
