import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-kasteria-official');
}

export default function LowrateKasteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-kasteria-official" />;
}
