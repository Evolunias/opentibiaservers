import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaorigins-ots');
}

export default function NoResetTibiaoriginsOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaorigins-ots" />;
}
