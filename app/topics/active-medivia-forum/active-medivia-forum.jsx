import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-medivia-forum');
}

export default function ActiveMediviaForumKeywordPage() {
  return <StaticKeywordPage slug="active-medivia-forum" />;
}
