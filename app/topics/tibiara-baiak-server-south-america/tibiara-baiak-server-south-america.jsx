import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-baiak-server-south-america');
}

export default function TibiaraBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-baiak-server-south-america" />;
}
