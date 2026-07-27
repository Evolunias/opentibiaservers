import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-yurots-official');
}

export default function LowrateYurotsOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-yurots-official" />;
}
