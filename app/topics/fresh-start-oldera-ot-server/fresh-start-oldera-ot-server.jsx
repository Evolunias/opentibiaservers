import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oldera-ot-server');
}

export default function FreshStartOlderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oldera-ot-server" />;
}
