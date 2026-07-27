import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolunia-official');
}

export default function LowrateEvoluniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolunia-official" />;
}
