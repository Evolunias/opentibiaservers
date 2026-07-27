import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-baiak-server');
}

export default function Tibia86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-baiak-server" />;
}
