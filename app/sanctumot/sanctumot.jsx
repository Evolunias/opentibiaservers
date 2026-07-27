import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('sanctumot');
}

export default function SanctumotPage() {
  return <StaticExactMatchPage slug="sanctumot" />;
}
