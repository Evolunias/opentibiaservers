import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-status');
}

export default function RubinotStatusKeywordPage() {
  return <StaticKeywordPage slug="rubinot-status" />;
}
