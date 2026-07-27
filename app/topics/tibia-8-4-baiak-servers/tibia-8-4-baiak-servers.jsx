import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-baiak-servers');
}

export default function Tibia84BaiakServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-baiak-servers" />;
}
