import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('tibia-spr-editor');
}

export default function TibiaSprEditorPage() {
  return <StaticExactMatchPage slug="tibia-spr-editor" />;
}
