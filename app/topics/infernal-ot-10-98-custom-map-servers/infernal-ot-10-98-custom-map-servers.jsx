import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-10-98-custom-map-servers');
}

export default function InfernalOt1098CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-10-98-custom-map-servers" />;
}
