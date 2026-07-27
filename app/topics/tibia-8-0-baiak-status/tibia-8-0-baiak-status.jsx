import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-baiak-status');
}

export default function Tibia80BaiakStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-baiak-status" />;
}
