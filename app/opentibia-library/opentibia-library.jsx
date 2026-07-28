import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('opentibia-library');
}

export default function OpentibiaLibraryPage() {
  return <StaticExactMatchPage slug="opentibia-library" />;
}
