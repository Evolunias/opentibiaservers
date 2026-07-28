import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('item-editor');
}

export default function ItemEditorPage() {
  return <StaticExactMatchPage slug="item-editor" />;
}
