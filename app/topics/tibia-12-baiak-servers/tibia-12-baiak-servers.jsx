import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-baiak-servers');
}

export default function Tibia12BaiakServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-baiak-servers" />;
}
