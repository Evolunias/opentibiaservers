import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-forum');
}

export default function ImperianicForumKeywordPage() {
  return <StaticKeywordPage slug="imperianic-forum" />;
}
