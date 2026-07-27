import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zunera-ot-ots');
}

export default function NoResetZuneraOtOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zunera-ot-ots" />;
}
