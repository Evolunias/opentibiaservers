import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-baiak-client');
}

export default function Tibia854BaiakClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-baiak-client" />;
}
