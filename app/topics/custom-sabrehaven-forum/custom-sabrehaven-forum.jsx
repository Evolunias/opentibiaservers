import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-sabrehaven-forum');
}

export default function CustomSabrehavenForumKeywordPage() {
  return <StaticKeywordPage slug="custom-sabrehaven-forum" />;
}
