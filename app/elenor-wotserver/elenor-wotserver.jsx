import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('elenor-wotserver');
}

export default function ElenorWotserverPage() {
  return <StaticExactMatchPage slug="elenor-wotserver" />;
}
