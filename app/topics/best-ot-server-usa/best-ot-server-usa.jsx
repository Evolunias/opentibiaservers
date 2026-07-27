import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ot-server-usa');
}

export default function BestOtServerUsaKeywordPage() {
  return <StaticKeywordPage slug="best-ot-server-usa" />;
}
