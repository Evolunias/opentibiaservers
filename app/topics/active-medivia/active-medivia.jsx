import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-medivia');
}

export default function ActiveMediviaKeywordPage() {
  return <StaticKeywordPage slug="active-medivia" />;
}
