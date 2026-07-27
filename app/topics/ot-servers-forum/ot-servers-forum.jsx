import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-servers-forum');
}

export default function OtServersForumKeywordPage() {
  return <StaticKeywordPage slug="ot-servers-forum" />;
}
