import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiara-ot-server');
}

export default function ActiveTibiaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-tibiara-ot-server" />;
}
