import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiantis-forum');
}

export default function NoResetTibiantisForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiantis-forum" />;
}
