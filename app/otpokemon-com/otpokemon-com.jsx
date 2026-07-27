import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('otpokemon-com');
}

export default function OtpokemonComPage() {
  return <StaticExactMatchPage slug="otpokemon-com" />;
}
