import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-season');
}

export default function ArchlightSeasonKeywordPage() {
  return <StaticKeywordPage slug="archlight-season" />;
}
