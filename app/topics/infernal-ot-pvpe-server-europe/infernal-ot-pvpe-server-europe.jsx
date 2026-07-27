import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvpe-server-europe');
}

export default function InfernalOtPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvpe-server-europe" />;
}
