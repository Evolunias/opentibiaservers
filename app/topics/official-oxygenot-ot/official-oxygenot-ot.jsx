import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oxygenot-ot');
}

export default function OfficialOxygenotOtKeywordPage() {
  return <StaticKeywordPage slug="official-oxygenot-ot" />;
}
