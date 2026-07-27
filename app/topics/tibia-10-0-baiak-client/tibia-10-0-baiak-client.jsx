import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-baiak-client');
}

export default function Tibia100BaiakClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-baiak-client" />;
}
