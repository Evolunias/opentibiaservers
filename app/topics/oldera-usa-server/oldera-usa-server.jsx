import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-usa-server');
}

export default function OlderaUsaServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-usa-server" />;
}
