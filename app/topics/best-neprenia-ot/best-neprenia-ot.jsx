import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-neprenia-ot');
}

export default function BestNepreniaOtKeywordPage() {
  return <StaticKeywordPage slug="best-neprenia-ot" />;
}
