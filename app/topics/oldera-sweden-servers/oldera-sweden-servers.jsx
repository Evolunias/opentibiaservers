import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-sweden-servers');
}

export default function OlderaSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-sweden-servers" />;
}
