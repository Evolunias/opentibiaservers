import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-10-98-no-reset-server');
}

export default function CalmeraOt1098NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-10-98-no-reset-server" />;
}
