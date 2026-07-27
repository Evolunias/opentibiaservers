import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-baiak-server-brazil');
}

export default function ElderaBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="eldera-baiak-server-brazil" />;
}
