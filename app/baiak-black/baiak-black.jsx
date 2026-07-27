import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('baiak-black');
}

export default function BaiakBlackPage() {
  return <StaticExactMatchPage slug="baiak-black" />;
}
