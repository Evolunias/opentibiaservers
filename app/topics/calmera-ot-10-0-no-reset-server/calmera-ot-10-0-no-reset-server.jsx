import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-10-0-no-reset-server');
}

export default function CalmeraOt100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-10-0-no-reset-server" />;
}
