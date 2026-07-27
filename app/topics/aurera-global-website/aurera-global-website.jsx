import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-website');
}

export default function AureraGlobalWebsiteKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-website" />;
}
