import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-calmera-ot');
}

export default function NewCalmeraOtKeywordPage() {
  return <StaticKeywordPage slug="new-calmera-ot" />;
}
