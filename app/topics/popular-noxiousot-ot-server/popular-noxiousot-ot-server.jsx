import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-noxiousot-ot-server');
}

export default function PopularNoxiousotOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-noxiousot-ot-server" />;
}
