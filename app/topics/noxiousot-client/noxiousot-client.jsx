import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-client');
}

export default function NoxiousotClientKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-client" />;
}
