import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-register-latin-america');
}

export default function NoResetRegisterLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-register-latin-america" />;
}
