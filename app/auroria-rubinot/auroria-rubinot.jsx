import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('auroria-rubinot');
}

export default function AuroriaRubinotPage() {
  return <StaticExactMatchPage slug="auroria-rubinot" />;
}
