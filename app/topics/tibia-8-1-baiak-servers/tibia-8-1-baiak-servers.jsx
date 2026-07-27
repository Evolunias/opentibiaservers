import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-baiak-servers');
}

export default function Tibia81BaiakServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-baiak-servers" />;
}
