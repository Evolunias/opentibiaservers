import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-poland-server');
}

export default function ImperianicPolandServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-poland-server" />;
}
