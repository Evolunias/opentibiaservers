import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-6-custom-map-server');
}

export default function Originaltibia76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-6-custom-map-server" />;
}
