import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-baiak-server-germany');
}

export default function TibiaraBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiara-baiak-server-germany" />;
}
