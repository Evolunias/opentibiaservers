import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('loucoserv');
}

export default function LoucoservPage() {
  return <StaticExactMatchPage slug="loucoserv" />;
}
