import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-forum-france');
}

export default function RetroForumFranceKeywordPage() {
  return <StaticKeywordPage slug="retro-forum-france" />;
}
