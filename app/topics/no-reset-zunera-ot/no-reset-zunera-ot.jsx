import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zunera-ot');
}

export default function NoResetZuneraOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zunera-ot" />;
}
