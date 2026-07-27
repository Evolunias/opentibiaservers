import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-14-custom-map-servers');
}

export default function Shadowcores14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-14-custom-map-servers" />;
}
