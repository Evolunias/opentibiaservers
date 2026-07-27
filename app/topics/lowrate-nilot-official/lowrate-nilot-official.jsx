import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nilot-official');
}

export default function LowrateNilotOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nilot-official" />;
}
