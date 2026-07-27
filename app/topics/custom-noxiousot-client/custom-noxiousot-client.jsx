import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-noxiousot-client');
}

export default function CustomNoxiousotClientKeywordPage() {
  return <StaticKeywordPage slug="custom-noxiousot-client" />;
}
