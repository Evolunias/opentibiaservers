import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-blazera-ot');
}

export default function NoResetBlazeraOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-blazera-ot" />;
}
