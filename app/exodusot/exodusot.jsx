import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('exodusot');
}

export default function ExodusotPage() {
  return <StaticExactMatchPage slug="exodusot" />;
}
