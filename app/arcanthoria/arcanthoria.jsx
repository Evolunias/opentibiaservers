import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('arcanthoria');
}

export default function ArcanthoriaPage() {
  return <StaticExactMatchPage slug="arcanthoria" />;
}
