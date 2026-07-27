import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-ot-server');
}

export default function OlderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-ot-server" />;
}
