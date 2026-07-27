import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaorigins-official');
}

export default function NewTibiaoriginsOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaorigins-official" />;
}
