import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvpe-server-poland');
}

export default function OxygenotPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvpe-server-poland" />;
}
