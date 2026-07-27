import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-north-america-server');
}

export default function CalmeraOtNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-north-america-server" />;
}
