import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-coxaot-forum');
}

export default function OfficialCoxaotForumKeywordPage() {
  return <StaticKeywordPage slug="official-coxaot-forum" />;
}
