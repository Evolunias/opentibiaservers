import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-baiak-server');
}

export default function Tibia100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-baiak-server" />;
}
