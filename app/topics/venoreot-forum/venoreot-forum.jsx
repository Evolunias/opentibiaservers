import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-forum');
}

export default function VenoreotForumKeywordPage() {
  return <StaticKeywordPage slug="venoreot-forum" />;
}
