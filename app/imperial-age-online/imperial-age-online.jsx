import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('imperial-age-online');
}

export default function ImperialAgeOnlinePage() {
  return <StaticExactMatchPage slug="imperial-age-online" />;
}
