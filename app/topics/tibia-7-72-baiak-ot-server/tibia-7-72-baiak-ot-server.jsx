import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-baiak-ot-server');
}

export default function Tibia772BaiakOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-baiak-ot-server" />;
}
