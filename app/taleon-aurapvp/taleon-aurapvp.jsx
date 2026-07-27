import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('taleon-aurapvp');
}

export default function TaleonAurapvpPage() {
  return <StaticExactMatchPage slug="taleon-aurapvp" />;
}
