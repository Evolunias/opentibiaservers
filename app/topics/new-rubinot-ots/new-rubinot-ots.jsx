import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rubinot-ots');
}

export default function NewRubinotOtsKeywordPage() {
  return <StaticKeywordPage slug="new-rubinot-ots" />;
}
