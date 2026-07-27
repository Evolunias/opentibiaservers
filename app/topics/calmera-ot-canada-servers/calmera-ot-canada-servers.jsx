import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-canada-servers');
}

export default function CalmeraOtCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-canada-servers" />;
}
