import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-sweden-server');
}

export default function CalmeraOtSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-sweden-server" />;
}
