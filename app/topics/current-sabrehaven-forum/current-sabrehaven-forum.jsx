import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-sabrehaven-forum');
}

export default function CurrentSabrehavenForumKeywordPage() {
  return <StaticKeywordPage slug="current-sabrehaven-forum" />;
}
