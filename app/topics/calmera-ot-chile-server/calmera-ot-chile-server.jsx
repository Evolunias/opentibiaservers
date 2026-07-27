import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-chile-server');
}

export default function CalmeraOtChileServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-chile-server" />;
}
