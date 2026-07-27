import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rubinot-ot');
}

export default function PopularRubinotOtKeywordPage() {
  return <StaticKeywordPage slug="popular-rubinot-ot" />;
}
