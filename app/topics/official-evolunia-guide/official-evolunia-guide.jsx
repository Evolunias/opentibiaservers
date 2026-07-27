import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolunia-guide');
}

export default function OfficialEvoluniaGuideKeywordPage() {
  return <StaticKeywordPage slug="official-evolunia-guide" />;
}
