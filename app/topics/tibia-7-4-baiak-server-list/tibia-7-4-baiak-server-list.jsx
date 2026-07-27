import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-baiak-server-list');
}

export default function Tibia74BaiakServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-baiak-server-list" />;
}
