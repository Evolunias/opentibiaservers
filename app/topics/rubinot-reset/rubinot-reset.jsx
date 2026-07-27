import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-reset');
}

export default function RubinotResetKeywordPage() {
  return <StaticKeywordPage slug="rubinot-reset" />;
}
