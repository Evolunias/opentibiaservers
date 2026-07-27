import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('nostalrius-on-nostalrius-com-br');
}

export default function NostalriusOnNostalriusComBrPage() {
  return <StaticExactMatchPage slug="nostalrius-on-nostalrius-com-br" />;
}
