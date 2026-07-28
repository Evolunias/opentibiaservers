import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('remeres-map-editor');
}

export default function RemeresMapEditorPage() {
  return <StaticExactMatchPage slug="remeres-map-editor" />;
}
