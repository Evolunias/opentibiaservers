import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rubinot-ot');
}

export default function TopRubinotOtKeywordPage() {
  return <StaticKeywordPage slug="top-rubinot-ot" />;
}
