import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-baiak-server-argentina');
}

export default function ElderaBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="eldera-baiak-server-argentina" />;
}
