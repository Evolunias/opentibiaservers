import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-no-reset-server-poland');
}

export default function MediviaNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="medivia-no-reset-server-poland" />;
}
