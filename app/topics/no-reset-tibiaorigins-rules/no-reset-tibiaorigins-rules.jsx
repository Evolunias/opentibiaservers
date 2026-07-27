import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaorigins-rules');
}

export default function NoResetTibiaoriginsRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaorigins-rules" />;
}
