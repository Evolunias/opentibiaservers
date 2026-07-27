import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-neprenia-ot');
}

export default function NoResetNepreniaOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-neprenia-ot" />;
}
