import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-10-0-custom-map-server');
}

export default function InfernalOt100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-10-0-custom-map-server" />;
}
