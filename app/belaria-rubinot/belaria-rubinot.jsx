import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('belaria-rubinot');
}

export default function BelariaRubinotPage() {
  return <StaticExactMatchPage slug="belaria-rubinot" />;
}
