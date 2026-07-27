import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thaisot-forum');
}

export default function CustomThaisotForumKeywordPage() {
  return <StaticKeywordPage slug="custom-thaisot-forum" />;
}
