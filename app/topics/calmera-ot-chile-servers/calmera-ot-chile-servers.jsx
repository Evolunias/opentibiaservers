import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-chile-servers');
}

export default function CalmeraOtChileServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-chile-servers" />;
}
