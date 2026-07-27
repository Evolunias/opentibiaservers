import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oldera-ot-server');
}

export default function CurrentOlderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-oldera-ot-server" />;
}
