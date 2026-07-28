import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('otb-editor');
}

export default function OtbEditorPage() {
  return <StaticExactMatchPage slug="otb-editor" />;
}
