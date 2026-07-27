import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-north-america-server');
}

export default function NoxiousotNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-north-america-server" />;
}
