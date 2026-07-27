import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-baiak-open-tibia-server');
}

export default function Tibia1098BaiakOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-baiak-open-tibia-server" />;
}
