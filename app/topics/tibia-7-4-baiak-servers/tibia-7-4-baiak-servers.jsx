import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-baiak-servers');
}

export default function Tibia74BaiakServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-baiak-servers" />;
}
