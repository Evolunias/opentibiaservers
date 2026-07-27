import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-blazera-ots');
}

export default function NoResetBlazeraOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-blazera-ots" />;
}
