import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-alastera-register');
}

export default function NoResetAlasteraRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-alastera-register" />;
}
