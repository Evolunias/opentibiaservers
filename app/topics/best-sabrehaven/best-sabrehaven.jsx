import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-sabrehaven');
}

export default function BestSabrehavenKeywordPage() {
  return <StaticKeywordPage slug="best-sabrehaven" />;
}
