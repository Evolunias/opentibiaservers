import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaorigins-official');
}

export default function BestTibiaoriginsOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaorigins-official" />;
}
