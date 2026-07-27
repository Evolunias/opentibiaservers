import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-baiak-servers');
}

export default function Tibia86BaiakServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-baiak-servers" />;
}
