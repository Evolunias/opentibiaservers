import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-aurera-global-forum');
}

export default function LowrateAureraGlobalForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-aurera-global-forum" />;
}
