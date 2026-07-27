import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-baiak-season');
}

export default function Tibia772BaiakSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-baiak-season" />;
}
