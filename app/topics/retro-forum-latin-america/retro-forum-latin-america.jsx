import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-forum-latin-america');
}

export default function RetroForumLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-forum-latin-america" />;
}
