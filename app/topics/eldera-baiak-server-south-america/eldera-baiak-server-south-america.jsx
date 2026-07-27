import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-baiak-server-south-america');
}

export default function ElderaBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-baiak-server-south-america" />;
}
