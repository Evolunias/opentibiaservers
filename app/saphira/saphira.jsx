import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('saphira');
}

export default function SaphiraPage() {
  return <StaticExactMatchPage slug="saphira" />;
}
