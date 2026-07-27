import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-54-custom-map-servers');
}

export default function Shadowcores854CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-54-custom-map-servers" />;
}
