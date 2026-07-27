import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-ot-server');
}

export default function OriginaltibiaOtServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-ot-server" />;
}
