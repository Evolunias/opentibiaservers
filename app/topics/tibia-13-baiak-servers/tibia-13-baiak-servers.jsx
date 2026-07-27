import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-baiak-servers');
}

export default function Tibia13BaiakServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-baiak-servers" />;
}
