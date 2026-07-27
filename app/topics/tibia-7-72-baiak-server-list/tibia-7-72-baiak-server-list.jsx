import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-baiak-server-list');
}

export default function Tibia772BaiakServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-baiak-server-list" />;
}
