import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaorigins-official');
}

export default function CurrentTibiaoriginsOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaorigins-official" />;
}
