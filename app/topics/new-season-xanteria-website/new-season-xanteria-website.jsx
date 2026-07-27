import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-xanteria-website');
}

export default function NewSeasonXanteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-xanteria-website" />;
}
