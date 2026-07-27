import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-aurera-global-official');
}

export default function HighrateAureraGlobalOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-aurera-global-official" />;
}
