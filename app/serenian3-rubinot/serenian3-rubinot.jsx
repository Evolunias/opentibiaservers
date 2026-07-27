import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('serenian3-rubinot');
}

export default function Serenian3RubinotPage() {
  return <StaticExactMatchPage slug="serenian3-rubinot" />;
}
