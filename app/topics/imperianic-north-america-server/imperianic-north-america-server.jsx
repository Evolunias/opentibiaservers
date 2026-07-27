import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-north-america-server');
}

export default function ImperianicNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-north-america-server" />;
}
