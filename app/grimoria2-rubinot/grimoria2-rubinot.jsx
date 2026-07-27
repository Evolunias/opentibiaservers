import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('grimoria2-rubinot');
}

export default function Grimoria2RubinotPage() {
  return <StaticExactMatchPage slug="grimoria2-rubinot" />;
}
