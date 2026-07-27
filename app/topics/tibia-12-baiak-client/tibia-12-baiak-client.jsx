import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-baiak-client');
}

export default function Tibia12BaiakClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-baiak-client" />;
}
