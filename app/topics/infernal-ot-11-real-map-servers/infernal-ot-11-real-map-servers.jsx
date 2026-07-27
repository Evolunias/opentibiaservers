import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-11-real-map-servers');
}

export default function InfernalOt11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-11-real-map-servers" />;
}
