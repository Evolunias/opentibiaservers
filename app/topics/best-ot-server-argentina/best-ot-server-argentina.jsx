import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ot-server-argentina');
}

export default function BestOtServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="best-ot-server-argentina" />;
}
