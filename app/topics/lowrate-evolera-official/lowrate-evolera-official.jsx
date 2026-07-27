import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolera-official');
}

export default function LowrateEvoleraOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolera-official" />;
}
