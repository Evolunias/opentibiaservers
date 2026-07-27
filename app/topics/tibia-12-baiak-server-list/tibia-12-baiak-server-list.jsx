import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-baiak-server-list');
}

export default function Tibia12BaiakServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-baiak-server-list" />;
}
