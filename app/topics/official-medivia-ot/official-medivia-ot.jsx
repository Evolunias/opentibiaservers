import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-medivia-ot');
}

export default function OfficialMediviaOtKeywordPage() {
  return <StaticKeywordPage slug="official-medivia-ot" />;
}
