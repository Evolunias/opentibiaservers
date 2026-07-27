import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-10-98-custom-map-server');
}

export default function Originaltibia1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-10-98-custom-map-server" />;
}
