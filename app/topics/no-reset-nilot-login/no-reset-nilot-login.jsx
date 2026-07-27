import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nilot-login');
}

export default function NoResetNilotLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nilot-login" />;
}
