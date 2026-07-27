import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-xanteria-forum');
}

export default function NoResetXanteriaForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-xanteria-forum" />;
}
