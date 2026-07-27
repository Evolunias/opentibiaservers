import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-ot');
}

export default function AlasteraOtKeywordPage() {
  return <StaticKeywordPage slug="alastera-ot" />;
}
