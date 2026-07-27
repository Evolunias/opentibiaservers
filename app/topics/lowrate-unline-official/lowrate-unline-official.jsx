import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-unline-official');
}

export default function LowrateUnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-unline-official" />;
}
