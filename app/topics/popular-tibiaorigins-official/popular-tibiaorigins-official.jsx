import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaorigins-official');
}

export default function PopularTibiaoriginsOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaorigins-official" />;
}
