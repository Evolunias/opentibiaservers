import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-ot-server');
}

export default function TibiaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-ot-server" />;
}
