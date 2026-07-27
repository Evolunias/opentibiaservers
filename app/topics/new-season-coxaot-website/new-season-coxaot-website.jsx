import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-coxaot-website');
}

export default function NewSeasonCoxaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-coxaot-website" />;
}
