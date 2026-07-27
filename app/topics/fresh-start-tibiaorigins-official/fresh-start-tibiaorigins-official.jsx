import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaorigins-official');
}

export default function FreshStartTibiaoriginsOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaorigins-official" />;
}
