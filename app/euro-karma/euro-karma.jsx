import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('euro-karma');
}

export default function EuroKarmaPage() {
  return <StaticExactMatchPage slug="euro-karma" />;
}
