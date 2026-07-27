import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-europe-server');
}

export default function ImperianicEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-europe-server" />;
}
