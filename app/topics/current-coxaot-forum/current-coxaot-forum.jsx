import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-coxaot-forum');
}

export default function CurrentCoxaotForumKeywordPage() {
  return <StaticKeywordPage slug="current-coxaot-forum" />;
}
