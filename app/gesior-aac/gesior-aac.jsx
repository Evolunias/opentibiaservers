import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('gesior-aac');
}

export default function GesiorAacPage() {
  return <StaticExactMatchPage slug="gesior-aac" />;
}
