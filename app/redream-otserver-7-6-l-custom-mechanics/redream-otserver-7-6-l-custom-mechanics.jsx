import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('redream-otserver-7-6-l-custom-mechanics');
}

export default function RedreamOtserver76LCustomMechanicsPage() {
  return <StaticExactMatchPage slug="redream-otserver-7-6-l-custom-mechanics" />;
}
