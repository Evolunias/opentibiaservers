import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-poland-servers');
}

export default function ImperianicPolandServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-poland-servers" />;
}
