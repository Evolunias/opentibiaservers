import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('otclient');
}

export default function OtclientPage() {
  return <StaticExactMatchPage slug="otclient" />;
}
