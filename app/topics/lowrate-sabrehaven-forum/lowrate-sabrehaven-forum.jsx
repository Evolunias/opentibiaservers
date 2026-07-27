import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-sabrehaven-forum');
}

export default function LowrateSabrehavenForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-sabrehaven-forum" />;
}
