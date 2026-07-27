import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolunia-website');
}

export default function NewSeasonEvoluniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolunia-website" />;
}
