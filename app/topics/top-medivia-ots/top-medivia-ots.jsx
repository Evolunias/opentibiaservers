import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-medivia-ots');
}

export default function TopMediviaOtsKeywordPage() {
  return <StaticKeywordPage slug="top-medivia-ots" />;
}
