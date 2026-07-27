import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-baiak-server-list');
}

export default function Tibia100BaiakServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-baiak-server-list" />;
}
