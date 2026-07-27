import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-baiak-ot-server');
}

export default function Tibia11BaiakOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-baiak-ot-server" />;
}
