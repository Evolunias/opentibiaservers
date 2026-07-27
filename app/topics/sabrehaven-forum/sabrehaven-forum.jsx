import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-forum');
}

export default function SabrehavenForumKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-forum" />;
}
