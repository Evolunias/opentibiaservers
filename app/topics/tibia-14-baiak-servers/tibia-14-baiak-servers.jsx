import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-baiak-servers');
}

export default function Tibia14BaiakServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-baiak-servers" />;
}
