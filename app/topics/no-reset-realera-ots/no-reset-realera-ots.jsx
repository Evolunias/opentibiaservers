import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realera-ots');
}

export default function NoResetRealeraOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realera-ots" />;
}
