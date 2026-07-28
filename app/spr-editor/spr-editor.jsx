import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('spr-editor');
}

export default function SprEditorPage() {
  return <StaticExactMatchPage slug="spr-editor" />;
}
