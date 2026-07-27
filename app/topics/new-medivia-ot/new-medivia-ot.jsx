import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-medivia-ot');
}

export default function NewMediviaOtKeywordPage() {
  return <StaticKeywordPage slug="new-medivia-ot" />;
}
