import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-no-reset-server-usa');
}

export default function MediviaNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="medivia-no-reset-server-usa" />;
}
