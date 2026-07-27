import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-11-custom-map-server');
}

export default function Originaltibia11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-11-custom-map-server" />;
}
