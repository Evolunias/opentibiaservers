import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-12-real-map-servers');
}

export default function Nilot12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-12-real-map-servers" />;
}
