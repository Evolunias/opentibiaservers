import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-fun-server');
}

export default function OriginaltibiaFunServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-fun-server" />;
}
