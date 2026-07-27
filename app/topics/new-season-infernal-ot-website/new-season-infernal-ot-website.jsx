import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-infernal-ot-website');
}

export default function NewSeasonInfernalOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-infernal-ot-website" />;
}
