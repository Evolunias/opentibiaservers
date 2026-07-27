import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-1-custom-map-servers');
}

export default function InfernalOt71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-1-custom-map-servers" />;
}
