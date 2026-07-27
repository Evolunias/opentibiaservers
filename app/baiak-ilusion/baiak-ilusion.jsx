import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('baiak-ilusion');
}

export default function BaiakIlusionPage() {
  return <StaticExactMatchPage slug="baiak-ilusion" />;
}
