import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-sabrehaven');
}

export default function NoResetSabrehavenKeywordPage() {
  return <StaticKeywordPage slug="no-reset-sabrehaven" />;
}
