import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-neprenia-client');
}

export default function NoResetNepreniaClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-neprenia-client" />;
}
