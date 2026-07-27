import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-medivia-forum');
}

export default function NewMediviaForumKeywordPage() {
  return <StaticKeywordPage slug="new-medivia-forum" />;
}
