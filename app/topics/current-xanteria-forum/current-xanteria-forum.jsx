import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-xanteria-forum');
}

export default function CurrentXanteriaForumKeywordPage() {
  return <StaticKeywordPage slug="current-xanteria-forum" />;
}
