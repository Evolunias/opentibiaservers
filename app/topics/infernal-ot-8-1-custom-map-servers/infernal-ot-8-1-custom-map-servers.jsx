import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-1-custom-map-servers');
}

export default function InfernalOt81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-1-custom-map-servers" />;
}
