import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-baiak-ot-server');
}

export default function Tibia1098BaiakOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-baiak-ot-server" />;
}
