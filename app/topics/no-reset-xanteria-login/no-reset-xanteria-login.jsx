import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-xanteria-login');
}

export default function NoResetXanteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-xanteria-login" />;
}
