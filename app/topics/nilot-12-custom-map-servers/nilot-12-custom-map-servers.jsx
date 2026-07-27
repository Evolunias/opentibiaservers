import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-12-custom-map-servers');
}

export default function Nilot12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-12-custom-map-servers" />;
}
