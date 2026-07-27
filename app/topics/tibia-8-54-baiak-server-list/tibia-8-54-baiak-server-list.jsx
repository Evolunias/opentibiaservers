import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-baiak-server-list');
}

export default function Tibia854BaiakServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-baiak-server-list" />;
}
