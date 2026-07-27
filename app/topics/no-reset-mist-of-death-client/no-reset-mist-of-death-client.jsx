import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-mist-of-death-client');
}

export default function NoResetMistOfDeathClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-mist-of-death-client" />;
}
