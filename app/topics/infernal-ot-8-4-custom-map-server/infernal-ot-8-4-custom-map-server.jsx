import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-4-custom-map-server');
}

export default function InfernalOt84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-4-custom-map-server" />;
}
