import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rubinot-ot');
}

export default function FreshStartRubinotOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rubinot-ot" />;
}
