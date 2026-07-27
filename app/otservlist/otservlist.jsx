import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('otservlist');
}

export default function OtservlistPage() {
  return <StaticExactMatchPage slug="otservlist" />;
}
