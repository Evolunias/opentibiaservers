import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-medivia');
}

export default function PopularMediviaKeywordPage() {
  return <StaticKeywordPage slug="popular-medivia" />;
}
