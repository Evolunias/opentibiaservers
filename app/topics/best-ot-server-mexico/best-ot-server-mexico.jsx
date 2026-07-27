import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ot-server-mexico');
}

export default function BestOtServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="best-ot-server-mexico" />;
}
