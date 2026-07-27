import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolunia-website');
}

export default function FreshStartEvoluniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolunia-website" />;
}
