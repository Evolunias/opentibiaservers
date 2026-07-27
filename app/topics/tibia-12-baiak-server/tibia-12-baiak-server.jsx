import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-baiak-server');
}

export default function Tibia12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-baiak-server" />;
}
