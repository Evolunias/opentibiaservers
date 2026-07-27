import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaorigins-official');
}

export default function ActiveTibiaoriginsOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaorigins-official" />;
}
