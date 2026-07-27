import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-baiak-server-list');
}

export default function Tibia11BaiakServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-baiak-server-list" />;
}
