import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('ardera-8-0-lunaris');
}

export default function Ardera80LunarisPage() {
  return <StaticExactMatchPage slug="ardera-8-0-lunaris" />;
}
