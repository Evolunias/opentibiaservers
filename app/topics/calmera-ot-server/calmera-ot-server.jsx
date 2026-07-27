import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-server');
}

export default function CalmeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-server" />;
}
