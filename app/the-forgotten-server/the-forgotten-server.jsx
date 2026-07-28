import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('the-forgotten-server');
}

export default function TheForgottenServerPage() {
  return <StaticExactMatchPage slug="the-forgotten-server" />;
}
