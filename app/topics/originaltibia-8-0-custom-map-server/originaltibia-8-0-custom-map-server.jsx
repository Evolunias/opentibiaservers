import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-0-custom-map-server');
}

export default function Originaltibia80CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-0-custom-map-server" />;
}
