import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-neprenia');
}

export default function NoResetNepreniaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-neprenia" />;
}
