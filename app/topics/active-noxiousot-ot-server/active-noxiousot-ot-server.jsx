import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-noxiousot-ot-server');
}

export default function ActiveNoxiousotOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-noxiousot-ot-server" />;
}
