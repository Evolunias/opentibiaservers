import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolunia-website');
}

export default function TopEvoluniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-evolunia-website" />;
}
