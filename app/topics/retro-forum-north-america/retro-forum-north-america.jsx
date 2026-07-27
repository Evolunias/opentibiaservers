import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-forum-north-america');
}

export default function RetroForumNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-forum-north-america" />;
}
