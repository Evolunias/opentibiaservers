import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-neprenia-register');
}

export default function NoResetNepreniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-neprenia-register" />;
}
