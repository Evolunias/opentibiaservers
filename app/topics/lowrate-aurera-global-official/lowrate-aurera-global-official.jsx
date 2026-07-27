import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-aurera-global-official');
}

export default function LowrateAureraGlobalOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-aurera-global-official" />;
}
