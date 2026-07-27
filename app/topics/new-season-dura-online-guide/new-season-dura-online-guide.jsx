import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-dura-online-guide');
}

export default function NewSeasonDuraOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-dura-online-guide" />;
}
