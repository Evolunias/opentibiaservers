import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-usa-servers');
}

export default function ImperianicUsaServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-usa-servers" />;
}
