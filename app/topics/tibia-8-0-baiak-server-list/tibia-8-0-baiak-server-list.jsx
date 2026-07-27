import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-baiak-server-list');
}

export default function Tibia80BaiakServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-baiak-server-list" />;
}
