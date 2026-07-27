import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rubinot-forum');
}

export default function ActiveRubinotForumKeywordPage() {
  return <StaticKeywordPage slug="active-rubinot-forum" />;
}
