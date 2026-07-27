import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-medivia-ots');
}

export default function PopularMediviaOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-medivia-ots" />;
}
