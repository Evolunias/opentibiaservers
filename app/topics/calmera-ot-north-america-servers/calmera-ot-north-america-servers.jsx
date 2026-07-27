import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-north-america-servers');
}

export default function CalmeraOtNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-north-america-servers" />;
}
