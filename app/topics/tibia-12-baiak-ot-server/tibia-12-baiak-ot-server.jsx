import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-baiak-ot-server');
}

export default function Tibia12BaiakOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-baiak-ot-server" />;
}
