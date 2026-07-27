import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-alastera-ot');
}

export default function NewAlasteraOtKeywordPage() {
  return <StaticKeywordPage slug="new-alastera-ot" />;
}
