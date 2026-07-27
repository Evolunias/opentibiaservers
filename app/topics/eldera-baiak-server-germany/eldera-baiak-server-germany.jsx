import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-baiak-server-germany');
}

export default function ElderaBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="eldera-baiak-server-germany" />;
}
