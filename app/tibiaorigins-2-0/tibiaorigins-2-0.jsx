import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('tibiaorigins-2-0');
}

export default function Tibiaorigins20Page() {
  return <StaticExactMatchPage slug="tibiaorigins-2-0" />;
}
