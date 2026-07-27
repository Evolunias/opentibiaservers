import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-alastera-ot');
}

export default function ActiveAlasteraOtKeywordPage() {
  return <StaticKeywordPage slug="active-alastera-ot" />;
}
