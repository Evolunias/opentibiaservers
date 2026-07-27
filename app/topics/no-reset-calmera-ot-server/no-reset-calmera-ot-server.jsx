import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-calmera-ot-server');
}

export default function NoResetCalmeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-calmera-ot-server" />;
}
