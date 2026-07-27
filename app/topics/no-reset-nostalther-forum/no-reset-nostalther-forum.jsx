import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nostalther-forum');
}

export default function NoResetNostaltherForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nostalther-forum" />;
}
