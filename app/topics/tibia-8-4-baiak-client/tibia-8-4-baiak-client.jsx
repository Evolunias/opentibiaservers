import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-baiak-client');
}

export default function Tibia84BaiakClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-baiak-client" />;
}
