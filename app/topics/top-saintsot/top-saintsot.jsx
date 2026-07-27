import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-saintsot');
}

export default function TopSaintsotKeywordPage() {
  return <StaticKeywordPage slug="top-saintsot" />;
}
