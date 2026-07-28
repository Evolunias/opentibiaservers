import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('return-of-the-saiyans');
}

export default function ReturnOfTheSaiyansPage() {
  return <StaticExactMatchPage slug="return-of-the-saiyans" />;
}
