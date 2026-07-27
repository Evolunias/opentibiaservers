import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-canada-server');
}

export default function NoxiousotCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-canada-server" />;
}
