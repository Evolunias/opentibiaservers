import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-coxaot-forum');
}

export default function NewCoxaotForumKeywordPage() {
  return <StaticKeywordPage slug="new-coxaot-forum" />;
}
