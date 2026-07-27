import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thaisot-official');
}

export default function LowrateThaisotOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thaisot-official" />;
}
