import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rubinot-ots');
}

export default function TopRubinotOtsKeywordPage() {
  return <StaticKeywordPage slug="top-rubinot-ots" />;
}
