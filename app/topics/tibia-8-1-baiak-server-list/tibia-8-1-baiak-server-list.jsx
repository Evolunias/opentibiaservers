import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-baiak-server-list');
}

export default function Tibia81BaiakServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-baiak-server-list" />;
}
