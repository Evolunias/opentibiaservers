import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-baiak-server');
}

export default function Tibia15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-baiak-server" />;
}
