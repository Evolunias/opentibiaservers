import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-baiak-client');
}

export default function Tibia772BaiakClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-baiak-client" />;
}
