import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-north-america-servers');
}

export default function NilotNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-north-america-servers" />;
}
