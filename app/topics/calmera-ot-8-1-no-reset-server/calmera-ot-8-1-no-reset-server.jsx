import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-8-1-no-reset-server');
}

export default function CalmeraOt81NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-8-1-no-reset-server" />;
}
