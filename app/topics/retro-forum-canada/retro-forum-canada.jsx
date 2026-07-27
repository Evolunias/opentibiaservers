import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-forum-canada');
}

export default function RetroForumCanadaKeywordPage() {
  return <StaticKeywordPage slug="retro-forum-canada" />;
}
