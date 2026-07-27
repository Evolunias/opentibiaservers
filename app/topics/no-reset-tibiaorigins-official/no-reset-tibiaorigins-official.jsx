import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaorigins-official');
}

export default function NoResetTibiaoriginsOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaorigins-official" />;
}
