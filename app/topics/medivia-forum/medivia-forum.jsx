import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-forum');
}

export default function MediviaForumKeywordPage() {
  return <StaticKeywordPage slug="medivia-forum" />;
}
