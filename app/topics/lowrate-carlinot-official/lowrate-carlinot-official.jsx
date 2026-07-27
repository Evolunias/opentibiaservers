import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-carlinot-official');
}

export default function LowrateCarlinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-carlinot-official" />;
}
