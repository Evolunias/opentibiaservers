import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-noxiousot-client');
}

export default function CurrentNoxiousotClientKeywordPage() {
  return <StaticKeywordPage slug="current-noxiousot-client" />;
}
