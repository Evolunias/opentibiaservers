import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-medivia');
}

export default function CustomMediviaKeywordPage() {
  return <StaticKeywordPage slug="custom-medivia" />;
}
