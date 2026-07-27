import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-fun-server');
}

export default function TibiaraFunServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-fun-server" />;
}
