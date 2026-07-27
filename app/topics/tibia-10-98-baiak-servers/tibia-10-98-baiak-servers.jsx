import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-baiak-servers');
}

export default function Tibia1098BaiakServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-baiak-servers" />;
}
