import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-no-reset-server-germany');
}

export default function MediviaNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="medivia-no-reset-server-germany" />;
}
