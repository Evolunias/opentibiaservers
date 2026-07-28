import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('hellgrave-exodus');
}

export default function HellgraveExodusPage() {
  return <StaticExactMatchPage slug="hellgrave-exodus" />;
}
