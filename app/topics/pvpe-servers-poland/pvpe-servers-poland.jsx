import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-servers-poland');
}

export default function PvpeServersPolandKeywordPage() {
  return <StaticKeywordPage slug="pvpe-servers-poland" />;
}
