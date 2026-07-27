import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oxygenot-official');
}

export default function TopOxygenotOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-oxygenot-official" />;
}
