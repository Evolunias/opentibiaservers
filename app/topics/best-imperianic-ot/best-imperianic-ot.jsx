import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-imperianic-ot');
}

export default function BestImperianicOtKeywordPage() {
  return <StaticKeywordPage slug="best-imperianic-ot" />;
}
