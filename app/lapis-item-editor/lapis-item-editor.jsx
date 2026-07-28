import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('lapis-item-editor');
}

export default function LapisItemEditorPage() {
  return <StaticExactMatchPage slug="lapis-item-editor" />;
}
