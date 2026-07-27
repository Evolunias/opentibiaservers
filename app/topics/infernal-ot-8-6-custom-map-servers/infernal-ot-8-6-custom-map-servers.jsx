import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-6-custom-map-servers');
}

export default function InfernalOt86CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-6-custom-map-servers" />;
}
