import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('mythibia-v2');
}

export default function MythibiaV2Page() {
  return <StaticExactMatchPage slug="mythibia-v2" />;
}
