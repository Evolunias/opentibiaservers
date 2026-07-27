import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-forum-south-america');
}

export default function RetroForumSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-forum-south-america" />;
}
