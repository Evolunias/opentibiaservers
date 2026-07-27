import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('baiak-go');
}

export default function BaiakGoPage() {
  return <StaticExactMatchPage slug="baiak-go" />;
}
