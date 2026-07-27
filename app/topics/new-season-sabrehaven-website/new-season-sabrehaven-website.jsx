import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-sabrehaven-website');
}

export default function NewSeasonSabrehavenWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-sabrehaven-website" />;
}
