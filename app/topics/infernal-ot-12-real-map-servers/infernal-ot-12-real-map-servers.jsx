import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-12-real-map-servers');
}

export default function InfernalOt12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-12-real-map-servers" />;
}
