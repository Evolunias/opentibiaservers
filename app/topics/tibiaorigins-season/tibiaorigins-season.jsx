import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-season');
}

export default function TibiaoriginsSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-season" />;
}
