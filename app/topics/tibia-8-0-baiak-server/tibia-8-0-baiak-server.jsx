import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-baiak-server');
}

export default function Tibia80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-baiak-server" />;
}
