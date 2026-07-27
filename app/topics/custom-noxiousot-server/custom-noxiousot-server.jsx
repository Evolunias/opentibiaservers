import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-noxiousot-server');
}

export default function CustomNoxiousotServerKeywordPage() {
  return <StaticKeywordPage slug="custom-noxiousot-server" />;
}
