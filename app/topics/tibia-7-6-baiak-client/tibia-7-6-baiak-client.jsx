import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-baiak-client');
}

export default function Tibia76BaiakClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-baiak-client" />;
}
