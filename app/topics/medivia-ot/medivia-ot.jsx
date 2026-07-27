import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-ot');
}

export default function MediviaOtKeywordPage() {
  return <StaticKeywordPage slug="medivia-ot" />;
}
