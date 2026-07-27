import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-saintsot');
}

export default function FreshStartSaintsotKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-saintsot" />;
}
