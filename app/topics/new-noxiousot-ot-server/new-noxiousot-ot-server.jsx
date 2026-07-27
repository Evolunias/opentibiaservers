import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-noxiousot-ot-server');
}

export default function NewNoxiousotOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-noxiousot-ot-server" />;
}
