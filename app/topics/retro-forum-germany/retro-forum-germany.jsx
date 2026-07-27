import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-forum-germany');
}

export default function RetroForumGermanyKeywordPage() {
  return <StaticKeywordPage slug="retro-forum-germany" />;
}
