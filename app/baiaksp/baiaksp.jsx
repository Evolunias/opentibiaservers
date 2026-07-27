import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('baiaksp');
}

export default function BaiakspPage() {
  return <StaticExactMatchPage slug="baiaksp" />;
}
