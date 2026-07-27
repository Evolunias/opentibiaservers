import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-noxiousot-server');
}

export default function TopNoxiousotServerKeywordPage() {
  return <StaticKeywordPage slug="top-noxiousot-server" />;
}
