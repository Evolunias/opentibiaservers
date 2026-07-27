import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-baiak-client');
}

export default function Tibia1098BaiakClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-baiak-client" />;
}
