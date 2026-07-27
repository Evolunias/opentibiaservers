import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-high-exp');
}

export default function RubinotHighExpKeywordPage() {
  return <StaticKeywordPage slug="rubinot-high-exp" />;
}
