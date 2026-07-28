import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('dat-editor');
}

export default function DatEditorPage() {
  return <StaticExactMatchPage slug="dat-editor" />;
}
