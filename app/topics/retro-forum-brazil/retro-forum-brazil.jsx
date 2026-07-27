import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-forum-brazil');
}

export default function RetroForumBrazilKeywordPage() {
  return <StaticKeywordPage slug="retro-forum-brazil" />;
}
