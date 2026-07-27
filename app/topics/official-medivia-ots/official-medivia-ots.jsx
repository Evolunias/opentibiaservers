import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-medivia-ots');
}

export default function OfficialMediviaOtsKeywordPage() {
  return <StaticKeywordPage slug="official-medivia-ots" />;
}
