import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-14-custom-map-servers');
}

export default function InfernalOt14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-14-custom-map-servers" />;
}
