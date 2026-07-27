import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-baiak-server');
}

export default function Tibia96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-baiak-server" />;
}
