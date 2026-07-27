import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-sabrehaven-forum');
}

export default function ActiveSabrehavenForumKeywordPage() {
  return <StaticKeywordPage slug="active-sabrehaven-forum" />;
}
