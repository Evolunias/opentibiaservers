import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-13-no-reset-server');
}

export default function CalmeraOt13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-13-no-reset-server" />;
}
