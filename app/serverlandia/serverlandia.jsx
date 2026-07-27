import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('serverlandia');
}

export default function ServerlandiaPage() {
  return <StaticExactMatchPage slug="serverlandia" />;
}
