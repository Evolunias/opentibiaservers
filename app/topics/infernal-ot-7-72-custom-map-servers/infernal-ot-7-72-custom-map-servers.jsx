import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-72-custom-map-servers');
}

export default function InfernalOt772CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-72-custom-map-servers" />;
}
