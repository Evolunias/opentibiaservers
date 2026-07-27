import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolunia-website');
}

export default function LowrateEvoluniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolunia-website" />;
}
