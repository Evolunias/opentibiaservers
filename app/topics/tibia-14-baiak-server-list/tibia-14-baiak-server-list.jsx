import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-baiak-server-list');
}

export default function Tibia14BaiakServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-baiak-server-list" />;
}
