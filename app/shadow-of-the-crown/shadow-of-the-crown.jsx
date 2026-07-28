import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('shadow-of-the-crown');
}

export default function ShadowOfTheCrownPage() {
  return <StaticExactMatchPage slug="shadow-of-the-crown" />;
}
