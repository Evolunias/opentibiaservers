import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-7-6-custom-map-servers');
}

export default function Nilot76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-7-6-custom-map-servers" />;
}
