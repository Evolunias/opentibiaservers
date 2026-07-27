import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-12-custom-map-server');
}

export default function InfernalOt12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-12-custom-map-server" />;
}
