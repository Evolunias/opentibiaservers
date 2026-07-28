import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('opentibiabr-canary');
}

export default function OpentibiabrCanaryPage() {
  return <StaticExactMatchPage slug="opentibiabr-canary" />;
}
