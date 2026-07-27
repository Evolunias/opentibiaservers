import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-forum');
}

export default function CarlinotForumKeywordPage() {
  return <StaticKeywordPage slug="carlinot-forum" />;
}
