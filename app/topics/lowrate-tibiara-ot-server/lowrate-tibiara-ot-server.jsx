import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiara-ot-server');
}

export default function LowrateTibiaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiara-ot-server" />;
}
