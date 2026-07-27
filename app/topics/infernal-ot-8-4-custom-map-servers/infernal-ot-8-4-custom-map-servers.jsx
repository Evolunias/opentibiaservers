import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-4-custom-map-servers');
}

export default function InfernalOt84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-4-custom-map-servers" />;
}
