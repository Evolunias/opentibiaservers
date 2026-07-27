import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-baiak-ot-server');
}

export default function Tibia71BaiakOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-baiak-ot-server" />;
}
