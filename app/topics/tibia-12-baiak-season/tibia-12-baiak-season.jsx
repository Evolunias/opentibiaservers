import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-baiak-season');
}

export default function Tibia12BaiakSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-baiak-season" />;
}
