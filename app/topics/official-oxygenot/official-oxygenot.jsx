import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oxygenot');
}

export default function OfficialOxygenotKeywordPage() {
  return <StaticKeywordPage slug="official-oxygenot" />;
}
