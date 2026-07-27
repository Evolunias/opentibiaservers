import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-imperianic-forum');
}

export default function CustomImperianicForumKeywordPage() {
  return <StaticKeywordPage slug="custom-imperianic-forum" />;
}
