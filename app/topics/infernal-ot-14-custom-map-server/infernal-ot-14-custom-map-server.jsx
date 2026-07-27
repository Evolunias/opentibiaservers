import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-14-custom-map-server');
}

export default function InfernalOt14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-14-custom-map-server" />;
}
