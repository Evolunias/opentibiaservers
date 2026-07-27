import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-medivia');
}

export default function TopMediviaKeywordPage() {
  return <StaticKeywordPage slug="top-medivia" />;
}
