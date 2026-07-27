import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-fun-server');
}

export default function OlderaFunServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-fun-server" />;
}
