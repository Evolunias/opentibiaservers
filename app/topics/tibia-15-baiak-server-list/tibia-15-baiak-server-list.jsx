import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-baiak-server-list');
}

export default function Tibia15BaiakServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-baiak-server-list" />;
}
