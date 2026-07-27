import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rubinot-forum');
}

export default function NewRubinotForumKeywordPage() {
  return <StaticKeywordPage slug="new-rubinot-forum" />;
}
