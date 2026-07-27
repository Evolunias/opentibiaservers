import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-argentina-server');
}

export default function CalmeraOtArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-argentina-server" />;
}
