import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-ot-server');
}

export default function NoxiousotOtServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-ot-server" />;
}
