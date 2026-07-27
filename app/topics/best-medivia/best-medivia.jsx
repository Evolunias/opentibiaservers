import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-medivia');
}

export default function BestMediviaKeywordPage() {
  return <StaticKeywordPage slug="best-medivia" />;
}
