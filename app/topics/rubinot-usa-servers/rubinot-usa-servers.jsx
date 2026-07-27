import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-usa-servers');
}

export default function RubinotUsaServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-usa-servers" />;
}
