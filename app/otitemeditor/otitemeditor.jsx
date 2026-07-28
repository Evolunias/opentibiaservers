import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('otitemeditor');
}

export default function OtitemeditorPage() {
  return <StaticExactMatchPage slug="otitemeditor" />;
}
