import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-alastera-ot');
}

export default function TopAlasteraOtKeywordPage() {
  return <StaticKeywordPage slug="top-alastera-ot" />;
}
