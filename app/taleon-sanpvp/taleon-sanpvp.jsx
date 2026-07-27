import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('taleon-sanpvp');
}

export default function TaleonSanpvpPage() {
  return <StaticExactMatchPage slug="taleon-sanpvp" />;
}
