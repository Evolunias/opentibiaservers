import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('the-nexus-world-a-new-era');
}

export default function TheNexusWorldANewEraPage() {
  return <StaticExactMatchPage slug="the-nexus-world-a-new-era" />;
}
