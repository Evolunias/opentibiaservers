import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ot-server-north-america');
}

export default function BestOtServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="best-ot-server-north-america" />;
}
