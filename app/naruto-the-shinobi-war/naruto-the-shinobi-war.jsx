import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('naruto-the-shinobi-war');
}

export default function NarutoTheShinobiWarPage() {
  return <StaticExactMatchPage slug="naruto-the-shinobi-war" />;
}
