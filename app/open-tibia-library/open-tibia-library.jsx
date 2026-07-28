import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('open-tibia-library');
}

export default function OpenTibiaLibraryPage() {
  return <StaticExactMatchPage slug="open-tibia-library" />;
}
