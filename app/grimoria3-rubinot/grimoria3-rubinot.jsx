import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('grimoria3-rubinot');
}

export default function Grimoria3RubinotPage() {
  return <StaticExactMatchPage slug="grimoria3-rubinot" />;
}
