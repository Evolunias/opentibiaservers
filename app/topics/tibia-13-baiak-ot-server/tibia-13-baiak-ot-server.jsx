import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-baiak-ot-server');
}

export default function Tibia13BaiakOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-baiak-ot-server" />;
}
