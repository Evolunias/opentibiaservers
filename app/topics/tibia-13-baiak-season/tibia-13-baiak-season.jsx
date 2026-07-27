import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-baiak-season');
}

export default function Tibia13BaiakSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-baiak-season" />;
}
