import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-coxaot-forum');
}

export default function BestCoxaotForumKeywordPage() {
  return <StaticKeywordPage slug="best-coxaot-forum" />;
}
