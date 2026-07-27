import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-medivia-client');
}

export default function OfficialMediviaClientKeywordPage() {
  return <StaticKeywordPage slug="official-medivia-client" />;
}
