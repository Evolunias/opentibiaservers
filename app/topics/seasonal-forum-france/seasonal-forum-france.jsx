import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-forum-france');
}

export default function SeasonalForumFranceKeywordPage() {
  return <StaticKeywordPage slug="seasonal-forum-france" />;
}
