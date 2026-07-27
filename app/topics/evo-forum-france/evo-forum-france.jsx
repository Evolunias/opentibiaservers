import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-forum-france');
}

export default function EvoForumFranceKeywordPage() {
  return <StaticKeywordPage slug="evo-forum-france" />;
}
