import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-forum-france');
}

export default function HighExpForumFranceKeywordPage() {
  return <StaticKeywordPage slug="high-exp-forum-france" />;
}
