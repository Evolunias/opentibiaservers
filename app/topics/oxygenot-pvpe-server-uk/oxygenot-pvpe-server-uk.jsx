import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvpe-server-uk');
}

export default function OxygenotPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvpe-server-uk" />;
}
