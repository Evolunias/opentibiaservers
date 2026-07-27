import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('otpiece-com');
}

export default function OtpieceComPage() {
  return <StaticExactMatchPage slug="otpiece-com" />;
}
