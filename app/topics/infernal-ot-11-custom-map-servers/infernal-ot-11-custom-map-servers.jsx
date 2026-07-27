import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-11-custom-map-servers');
}

export default function InfernalOt11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-11-custom-map-servers" />;
}
