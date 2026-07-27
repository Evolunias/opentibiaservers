import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-germany-servers');
}

export default function OlderaGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-germany-servers" />;
}
