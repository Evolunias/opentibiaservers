import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('14-12-qumoras-rook-valley');
}

export default function Exact1412QumorasRookValleyPage() {
  return <StaticExactMatchPage slug="14-12-qumoras-rook-valley" />;
}
