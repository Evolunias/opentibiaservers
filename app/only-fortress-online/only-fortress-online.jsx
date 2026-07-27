import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('only-fortress-online');
}

export default function OnlyFortressOnlinePage() {
  return <StaticExactMatchPage slug="only-fortress-online" />;
}
