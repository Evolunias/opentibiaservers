import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-sabrehaven-forum');
}

export default function BestSabrehavenForumKeywordPage() {
  return <StaticKeywordPage slug="best-sabrehaven-forum" />;
}
