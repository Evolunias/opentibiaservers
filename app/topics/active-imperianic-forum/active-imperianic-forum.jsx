import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-imperianic-forum');
}

export default function ActiveImperianicForumKeywordPage() {
  return <StaticKeywordPage slug="active-imperianic-forum" />;
}
