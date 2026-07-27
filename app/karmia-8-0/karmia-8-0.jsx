import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('karmia-8-0');
}

export default function Karmia80Page() {
  return <StaticExactMatchPage slug="karmia-8-0" />;
}
