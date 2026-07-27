import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-calmera-ot');
}

export default function NoResetCalmeraOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-calmera-ot" />;
}
