import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rubinot-forum');
}

export default function CustomRubinotForumKeywordPage() {
  return <StaticKeywordPage slug="custom-rubinot-forum" />;
}
