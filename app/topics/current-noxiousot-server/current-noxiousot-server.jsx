import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-noxiousot-server');
}

export default function CurrentNoxiousotServerKeywordPage() {
  return <StaticKeywordPage slug="current-noxiousot-server" />;
}
