import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaorigins-official');
}

export default function LowrateTibiaoriginsOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaorigins-official" />;
}
