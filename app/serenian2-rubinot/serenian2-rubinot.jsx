import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('serenian2-rubinot');
}

export default function Serenian2RubinotPage() {
  return <StaticExactMatchPage slug="serenian2-rubinot" />;
}
