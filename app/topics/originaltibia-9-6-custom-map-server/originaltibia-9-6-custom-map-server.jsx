import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-9-6-custom-map-server');
}

export default function Originaltibia96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-9-6-custom-map-server" />;
}
