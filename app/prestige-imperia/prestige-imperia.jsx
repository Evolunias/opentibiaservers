import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('prestige-imperia');
}

export default function PrestigeImperiaPage() {
  return <StaticExactMatchPage slug="prestige-imperia" />;
}
