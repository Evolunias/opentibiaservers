import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-10-0-custom-map-servers');
}

export default function InfernalOt100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-10-0-custom-map-servers" />;
}
