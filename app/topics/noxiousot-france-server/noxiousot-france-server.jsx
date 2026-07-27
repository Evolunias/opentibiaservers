import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-france-server');
}

export default function NoxiousotFranceServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-france-server" />;
}
