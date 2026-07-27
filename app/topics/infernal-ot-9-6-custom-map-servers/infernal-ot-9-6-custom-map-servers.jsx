import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-9-6-custom-map-servers');
}

export default function InfernalOt96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-9-6-custom-map-servers" />;
}
