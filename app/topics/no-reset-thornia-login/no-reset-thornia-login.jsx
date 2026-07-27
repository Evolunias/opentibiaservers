import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thornia-login');
}

export default function NoResetThorniaLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thornia-login" />;
}
