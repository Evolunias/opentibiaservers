import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-south-america-server');
}

export default function CalmeraOtSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-south-america-server" />;
}
