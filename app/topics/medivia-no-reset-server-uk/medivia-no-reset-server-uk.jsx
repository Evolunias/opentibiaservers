import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-no-reset-server-uk');
}

export default function MediviaNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="medivia-no-reset-server-uk" />;
}
