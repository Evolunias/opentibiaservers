import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-aurera-global-website');
}

export default function NewSeasonAureraGlobalWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-aurera-global-website" />;
}
