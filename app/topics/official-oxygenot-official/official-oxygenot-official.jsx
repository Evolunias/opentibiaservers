import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oxygenot-official');
}

export default function OfficialOxygenotOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-oxygenot-official" />;
}
