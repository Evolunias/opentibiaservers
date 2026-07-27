import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-saintsot');
}

export default function PopularSaintsotKeywordPage() {
  return <StaticKeywordPage slug="popular-saintsot" />;
}
