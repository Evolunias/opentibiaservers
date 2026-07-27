import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvpe-server-europe');
}

export default function OxygenotPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvpe-server-europe" />;
}
