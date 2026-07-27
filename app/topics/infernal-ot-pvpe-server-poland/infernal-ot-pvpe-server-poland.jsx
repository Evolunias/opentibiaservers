import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvpe-server-poland');
}

export default function InfernalOtPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvpe-server-poland" />;
}
