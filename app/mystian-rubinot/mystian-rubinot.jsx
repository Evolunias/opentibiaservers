import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('mystian-rubinot');
}

export default function MystianRubinotPage() {
  return <StaticExactMatchPage slug="mystian-rubinot" />;
}
