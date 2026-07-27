import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-europe-servers');
}

export default function ImperianicEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-europe-servers" />;
}
