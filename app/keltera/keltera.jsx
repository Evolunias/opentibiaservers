import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('keltera');
}

export default function KelteraPage() {
  return <StaticExactMatchPage slug="keltera" />;
}
