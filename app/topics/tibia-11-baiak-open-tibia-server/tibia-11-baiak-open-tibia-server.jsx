import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-baiak-open-tibia-server');
}

export default function Tibia11BaiakOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-baiak-open-tibia-server" />;
}
