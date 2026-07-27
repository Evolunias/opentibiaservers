import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-sabrehaven-forum');
}

export default function NewSabrehavenForumKeywordPage() {
  return <StaticKeywordPage slug="new-sabrehaven-forum" />;
}
