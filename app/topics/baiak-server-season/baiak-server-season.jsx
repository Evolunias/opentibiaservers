import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-season');
}

export default function BaiakServerSeasonKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-season" />;
}
