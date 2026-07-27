import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-noxiousot-server');
}

export default function NewNoxiousotServerKeywordPage() {
  return <StaticKeywordPage slug="new-noxiousot-server" />;
}
