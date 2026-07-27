import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-baiak-open-tibia-server');
}

export default function Tibia96BaiakOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-baiak-open-tibia-server" />;
}
