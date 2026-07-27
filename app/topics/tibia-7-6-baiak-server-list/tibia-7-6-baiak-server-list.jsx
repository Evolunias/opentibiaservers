import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-baiak-server-list');
}

export default function Tibia76BaiakServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-baiak-server-list" />;
}
