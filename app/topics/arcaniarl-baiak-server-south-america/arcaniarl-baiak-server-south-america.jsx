import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-baiak-server-south-america');
}

export default function ArcaniarlBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-baiak-server-south-america" />;
}
