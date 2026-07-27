import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-4-custom-map-servers');
}

export default function InfernalOt74CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-4-custom-map-servers" />;
}
