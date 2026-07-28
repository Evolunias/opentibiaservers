import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('tibia-dat-editor');
}

export default function TibiaDatEditorPage() {
  return <StaticExactMatchPage slug="tibia-dat-editor" />;
}
