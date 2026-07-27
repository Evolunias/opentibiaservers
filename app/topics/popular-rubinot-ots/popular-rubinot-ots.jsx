import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rubinot-ots');
}

export default function PopularRubinotOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-rubinot-ots" />;
}
