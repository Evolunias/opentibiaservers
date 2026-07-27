import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-fun-server');
}

export default function CalmeraOtFunServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-fun-server" />;
}
