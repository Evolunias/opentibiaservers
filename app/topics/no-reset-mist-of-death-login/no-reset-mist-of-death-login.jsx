import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-mist-of-death-login');
}

export default function NoResetMistOfDeathLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-mist-of-death-login" />;
}
