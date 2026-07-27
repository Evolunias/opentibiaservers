import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-medivia');
}

export default function FreshStartMediviaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-medivia" />;
}
