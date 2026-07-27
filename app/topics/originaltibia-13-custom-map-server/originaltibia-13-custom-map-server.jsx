import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-13-custom-map-server');
}

export default function Originaltibia13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-13-custom-map-server" />;
}
