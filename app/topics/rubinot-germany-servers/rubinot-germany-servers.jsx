import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-germany-servers');
}

export default function RubinotGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-germany-servers" />;
}
