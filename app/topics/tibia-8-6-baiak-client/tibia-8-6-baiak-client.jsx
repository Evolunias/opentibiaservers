import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-baiak-client');
}

export default function Tibia86BaiakClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-baiak-client" />;
}
