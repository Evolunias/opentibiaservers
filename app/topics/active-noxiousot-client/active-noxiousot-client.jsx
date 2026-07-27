import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-noxiousot-client');
}

export default function ActiveNoxiousotClientKeywordPage() {
  return <StaticKeywordPage slug="active-noxiousot-client" />;
}
