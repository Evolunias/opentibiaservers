import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('exodus-ot');
}

export default function ExodusOtPage() {
  return <StaticExactMatchPage slug="exodus-ot" />;
}
