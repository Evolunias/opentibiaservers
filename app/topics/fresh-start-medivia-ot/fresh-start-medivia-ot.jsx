import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-medivia-ot');
}

export default function FreshStartMediviaOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-medivia-ot" />;
}
