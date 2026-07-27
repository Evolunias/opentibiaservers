import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-medivia-ots');
}

export default function ActiveMediviaOtsKeywordPage() {
  return <StaticKeywordPage slug="active-medivia-ots" />;
}
