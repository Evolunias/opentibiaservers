import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-baiak-ot-server');
}

export default function Tibia854BaiakOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-baiak-ot-server" />;
}
