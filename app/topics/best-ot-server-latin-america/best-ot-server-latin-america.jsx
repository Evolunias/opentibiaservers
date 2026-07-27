import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ot-server-latin-america');
}

export default function BestOtServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="best-ot-server-latin-america" />;
}
