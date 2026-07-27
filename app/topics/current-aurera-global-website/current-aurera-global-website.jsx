import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-aurera-global-website');
}

export default function CurrentAureraGlobalWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-aurera-global-website" />;
}
