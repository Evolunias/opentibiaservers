import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-6-custom-map-server');
}

export default function Originaltibia86CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-6-custom-map-server" />;
}
