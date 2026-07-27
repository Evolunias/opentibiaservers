import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-baiak-ot-server');
}

export default function Tibia80BaiakOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-baiak-ot-server" />;
}
