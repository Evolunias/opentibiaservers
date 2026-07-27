import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-south-america-servers');
}

export default function CalmeraOtSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-south-america-servers" />;
}
