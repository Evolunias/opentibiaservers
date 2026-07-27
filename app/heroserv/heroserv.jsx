import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('heroserv');
}

export default function HeroservPage() {
  return <StaticExactMatchPage slug="heroserv" />;
}
