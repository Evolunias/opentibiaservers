import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-aurera-global-website');
}

export default function FreshStartAureraGlobalWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-aurera-global-website" />;
}
