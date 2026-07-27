import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-baiak-client');
}

export default function Tibia71BaiakClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-baiak-client" />;
}
