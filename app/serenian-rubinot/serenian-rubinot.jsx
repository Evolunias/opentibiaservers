import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('serenian-rubinot');
}

export default function SerenianRubinotPage() {
  return <StaticExactMatchPage slug="serenian-rubinot" />;
}
