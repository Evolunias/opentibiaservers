import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolunia-website');
}

export default function HighrateEvoluniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolunia-website" />;
}
