import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('osiris-horusbr');
}

export default function OsirisHorusbrPage() {
  return <StaticExactMatchPage slug="osiris-horusbr" />;
}
