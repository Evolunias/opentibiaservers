import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thornia-official');
}

export default function LowrateThorniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thornia-official" />;
}
