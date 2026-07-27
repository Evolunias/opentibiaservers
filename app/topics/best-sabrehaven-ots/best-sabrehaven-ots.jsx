import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-sabrehaven-ots');
}

export default function BestSabrehavenOtsKeywordPage() {
  return <StaticKeywordPage slug="best-sabrehaven-ots" />;
}
