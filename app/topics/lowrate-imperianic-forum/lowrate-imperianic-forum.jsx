import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-imperianic-forum');
}

export default function LowrateImperianicForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-imperianic-forum" />;
}
