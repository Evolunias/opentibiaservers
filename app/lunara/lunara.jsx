import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('lunara');
}

export default function LunaraPage() {
  return <StaticExactMatchPage slug="lunara" />;
}
