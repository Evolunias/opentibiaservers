import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-baiak-servers');
}

export default function Tibia96BaiakServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-baiak-servers" />;
}
