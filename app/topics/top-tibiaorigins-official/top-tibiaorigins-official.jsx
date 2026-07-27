import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaorigins-official');
}

export default function TopTibiaoriginsOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaorigins-official" />;
}
