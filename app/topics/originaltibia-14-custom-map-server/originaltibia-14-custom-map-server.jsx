import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-14-custom-map-server');
}

export default function Originaltibia14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-14-custom-map-server" />;
}
