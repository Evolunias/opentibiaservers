import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-baiak-client');
}

export default function Tibia11BaiakClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-baiak-client" />;
}
