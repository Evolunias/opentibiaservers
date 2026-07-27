import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-noxiousot-server');
}

export default function ActiveNoxiousotServerKeywordPage() {
  return <StaticKeywordPage slug="active-noxiousot-server" />;
}
