import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('baiak-icewar');
}

export default function BaiakIcewarPage() {
  return <StaticExactMatchPage slug="baiak-icewar" />;
}
