import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-germany-servers');
}

export default function CalmeraOtGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-germany-servers" />;
}
