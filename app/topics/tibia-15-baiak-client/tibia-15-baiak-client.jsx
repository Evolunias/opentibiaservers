import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-baiak-client');
}

export default function Tibia15BaiakClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-baiak-client" />;
}
