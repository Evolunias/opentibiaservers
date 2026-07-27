import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-imperianic-register');
}

export default function NoResetImperianicRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-imperianic-register" />;
}
