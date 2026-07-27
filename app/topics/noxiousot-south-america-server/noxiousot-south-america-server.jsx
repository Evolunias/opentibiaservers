import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-south-america-server');
}

export default function NoxiousotSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-south-america-server" />;
}
