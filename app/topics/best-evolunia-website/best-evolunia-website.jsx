import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolunia-website');
}

export default function BestEvoluniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-evolunia-website" />;
}
