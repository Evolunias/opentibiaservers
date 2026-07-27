import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-poland-server');
}

export default function CalmeraOtPolandServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-poland-server" />;
}
