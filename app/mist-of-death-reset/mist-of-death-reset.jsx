import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('mist-of-death-reset');
}

export default function MistOfDeathResetPage() {
  return <StaticExactMatchPage slug="mist-of-death-reset" />;
}
