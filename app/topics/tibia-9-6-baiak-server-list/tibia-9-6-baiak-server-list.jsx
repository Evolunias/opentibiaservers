import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-baiak-server-list');
}

export default function Tibia96BaiakServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-baiak-server-list" />;
}
