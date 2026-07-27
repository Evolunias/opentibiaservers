import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-usa-server');
}

export default function ImperianicUsaServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-usa-server" />;
}
