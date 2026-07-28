import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('my-aac');
}

export default function MyAacPage() {
  return <StaticExactMatchPage slug="my-aac" />;
}
