import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('shadow-illusion');
}

export default function ShadowIllusionPage() {
  return <StaticExactMatchPage slug="shadow-illusion" />;
}
