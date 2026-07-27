import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-neprenia-ots');
}

export default function NoResetNepreniaOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-neprenia-ots" />;
}
