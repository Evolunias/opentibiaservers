import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-sabrehaven-ot');
}

export default function BestSabrehavenOtKeywordPage() {
  return <StaticKeywordPage slug="best-sabrehaven-ot" />;
}
