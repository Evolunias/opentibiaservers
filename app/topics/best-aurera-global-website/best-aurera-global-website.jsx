import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-aurera-global-website');
}

export default function BestAureraGlobalWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-aurera-global-website" />;
}
