import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-coxaot-forum');
}

export default function NoResetCoxaotForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-coxaot-forum" />;
}
