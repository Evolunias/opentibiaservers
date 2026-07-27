import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-baiak-servers');
}

export default function Tibia11BaiakServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-baiak-servers" />;
}
