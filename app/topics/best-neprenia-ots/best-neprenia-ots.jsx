import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-neprenia-ots');
}

export default function BestNepreniaOtsKeywordPage() {
  return <StaticKeywordPage slug="best-neprenia-ots" />;
}
