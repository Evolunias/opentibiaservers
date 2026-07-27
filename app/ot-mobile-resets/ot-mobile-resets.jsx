import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('ot-mobile-resets');
}

export default function OtMobileResetsPage() {
  return <StaticExactMatchPage slug="ot-mobile-resets" />;
}
