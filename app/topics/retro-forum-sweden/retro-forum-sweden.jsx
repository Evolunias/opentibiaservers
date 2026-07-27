import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-forum-sweden');
}

export default function RetroForumSwedenKeywordPage() {
  return <StaticKeywordPage slug="retro-forum-sweden" />;
}
