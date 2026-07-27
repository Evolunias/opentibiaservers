import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-server');
}

export default function NoxiousotServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-server" />;
}
