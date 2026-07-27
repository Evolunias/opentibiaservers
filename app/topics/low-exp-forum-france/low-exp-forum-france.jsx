import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-forum-france');
}

export default function LowExpForumFranceKeywordPage() {
  return <StaticKeywordPage slug="low-exp-forum-france" />;
}
