import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rookgaard-tales-forum');
}

export default function LowrateRookgaardTalesForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rookgaard-tales-forum" />;
}
