import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-noxiousot-server');
}

export default function BestNoxiousotServerKeywordPage() {
  return <StaticKeywordPage slug="best-noxiousot-server" />;
}
