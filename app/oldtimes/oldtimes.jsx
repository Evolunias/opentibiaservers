import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('oldtimes');
}

export default function OldtimesPage() {
  return <StaticExactMatchPage slug="oldtimes" />;
}
