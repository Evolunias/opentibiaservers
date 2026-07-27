import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolunia-website');
}

export default function PopularEvoluniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-evolunia-website" />;
}
