import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-15-custom-map-servers');
}

export default function InfernalOt15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-15-custom-map-servers" />;
}
