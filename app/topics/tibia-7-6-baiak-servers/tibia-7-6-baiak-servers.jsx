import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-baiak-servers');
}

export default function Tibia76BaiakServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-baiak-servers" />;
}
