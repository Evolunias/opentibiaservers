import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-baiak-server');
}

export default function Tibia14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-baiak-server" />;
}
