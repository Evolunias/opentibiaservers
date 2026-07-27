import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-xanteria-forum');
}

export default function HighrateXanteriaForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-xanteria-forum" />;
}
