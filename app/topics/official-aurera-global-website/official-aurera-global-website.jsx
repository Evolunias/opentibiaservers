import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-aurera-global-website');
}

export default function OfficialAureraGlobalWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-aurera-global-website" />;
}
