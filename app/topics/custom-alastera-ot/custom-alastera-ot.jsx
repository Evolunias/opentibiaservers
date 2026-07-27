import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-alastera-ot');
}

export default function CustomAlasteraOtKeywordPage() {
  return <StaticKeywordPage slug="custom-alastera-ot" />;
}
