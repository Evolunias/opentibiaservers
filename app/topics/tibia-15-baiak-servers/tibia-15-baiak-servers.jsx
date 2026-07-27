import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-baiak-servers');
}

export default function Tibia15BaiakServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-baiak-servers" />;
}
