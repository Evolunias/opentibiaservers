import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiara-ot-server');
}

export default function CustomTibiaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiara-ot-server" />;
}
