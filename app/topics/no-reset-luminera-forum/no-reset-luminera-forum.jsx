import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-luminera-forum');
}

export default function NoResetLumineraForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-luminera-forum" />;
}
