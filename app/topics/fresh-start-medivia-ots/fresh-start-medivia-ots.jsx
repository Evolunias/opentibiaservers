import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-medivia-ots');
}

export default function FreshStartMediviaOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-medivia-ots" />;
}
