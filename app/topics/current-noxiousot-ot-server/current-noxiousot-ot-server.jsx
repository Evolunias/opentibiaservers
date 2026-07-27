import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-noxiousot-ot-server');
}

export default function CurrentNoxiousotOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-noxiousot-ot-server" />;
}
