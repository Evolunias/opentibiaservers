import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-season');
}

export default function DuraOnlineSeasonKeywordPage() {
  return <StaticKeywordPage slug="dura-online-season" />;
}
