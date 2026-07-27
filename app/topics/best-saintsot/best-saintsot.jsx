import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-saintsot');
}

export default function BestSaintsotKeywordPage() {
  return <StaticKeywordPage slug="best-saintsot" />;
}
