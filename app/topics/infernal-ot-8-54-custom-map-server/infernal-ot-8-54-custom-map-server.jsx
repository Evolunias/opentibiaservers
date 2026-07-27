import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-54-custom-map-server');
}

export default function InfernalOt854CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-54-custom-map-server" />;
}
