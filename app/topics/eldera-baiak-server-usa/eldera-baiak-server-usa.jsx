import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-baiak-server-usa');
}

export default function ElderaBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="eldera-baiak-server-usa" />;
}
