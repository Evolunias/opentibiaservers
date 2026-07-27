import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-noxiousot-ot-server');
}

export default function CustomNoxiousotOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-noxiousot-ot-server" />;
}
