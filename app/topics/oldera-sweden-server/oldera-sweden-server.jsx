import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-sweden-server');
}

export default function OlderaSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-sweden-server" />;
}
