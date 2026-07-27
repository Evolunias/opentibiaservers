import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-noxiousot-client');
}

export default function NewNoxiousotClientKeywordPage() {
  return <StaticKeywordPage slug="new-noxiousot-client" />;
}
