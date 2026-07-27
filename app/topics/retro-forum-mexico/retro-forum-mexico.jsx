import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-forum-mexico');
}

export default function RetroForumMexicoKeywordPage() {
  return <StaticKeywordPage slug="retro-forum-mexico" />;
}
