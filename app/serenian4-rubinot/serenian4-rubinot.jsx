import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('serenian4-rubinot');
}

export default function Serenian4RubinotPage() {
  return <StaticExactMatchPage slug="serenian4-rubinot" />;
}
