import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-ot-server');
}

export default function CalmeraOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-ot-server" />;
}
