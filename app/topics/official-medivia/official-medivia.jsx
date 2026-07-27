import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-medivia');
}

export default function OfficialMediviaKeywordPage() {
  return <StaticKeywordPage slug="official-medivia" />;
}
