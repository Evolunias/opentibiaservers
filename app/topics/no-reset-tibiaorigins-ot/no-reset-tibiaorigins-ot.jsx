import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaorigins-ot');
}

export default function NoResetTibiaoriginsOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaorigins-ot" />;
}
