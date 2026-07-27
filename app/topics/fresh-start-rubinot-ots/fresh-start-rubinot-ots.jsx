import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rubinot-ots');
}

export default function FreshStartRubinotOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rubinot-ots" />;
}
