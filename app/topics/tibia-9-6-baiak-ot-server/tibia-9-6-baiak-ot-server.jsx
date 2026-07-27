import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-baiak-ot-server');
}

export default function Tibia96BaiakOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-baiak-ot-server" />;
}
