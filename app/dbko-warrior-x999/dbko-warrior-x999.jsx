import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('dbko-warrior-x999');
}

export default function DbkoWarriorX999Page() {
  return <StaticExactMatchPage slug="dbko-warrior-x999" />;
}
