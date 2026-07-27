import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realera-ot');
}

export default function NoResetRealeraOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realera-ot" />;
}
