import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaorigins');
}

export default function NoResetTibiaoriginsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaorigins" />;
}
