import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-medivia-forum');
}

export default function CustomMediviaForumKeywordPage() {
  return <StaticKeywordPage slug="custom-medivia-forum" />;
}
