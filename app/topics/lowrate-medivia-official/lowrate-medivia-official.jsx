import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-medivia-official');
}

export default function LowrateMediviaOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-medivia-official" />;
}
