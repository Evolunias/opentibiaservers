import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiara-ot-server');
}

export default function TopTibiaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-tibiara-ot-server" />;
}
