import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiara-ot-server');
}

export default function CurrentTibiaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-tibiara-ot-server" />;
}
