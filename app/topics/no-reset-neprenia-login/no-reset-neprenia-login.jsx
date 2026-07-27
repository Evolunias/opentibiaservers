import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-neprenia-login');
}

export default function NoResetNepreniaLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-neprenia-login" />;
}
