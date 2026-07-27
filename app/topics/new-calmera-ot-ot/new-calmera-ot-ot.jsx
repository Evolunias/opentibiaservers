import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-calmera-ot-ot');
}

export default function NewCalmeraOtOtKeywordPage() {
  return <StaticKeywordPage slug="new-calmera-ot-ot" />;
}
