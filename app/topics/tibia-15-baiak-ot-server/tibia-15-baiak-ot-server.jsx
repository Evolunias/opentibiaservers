import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-baiak-ot-server');
}

export default function Tibia15BaiakOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-baiak-ot-server" />;
}
