import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-north-america-servers');
}

export default function ImperianicNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-north-america-servers" />;
}
