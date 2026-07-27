import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-north-america-server');
}

export default function NilotNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-north-america-server" />;
}
