import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realera-ot-server');
}

export default function OfficialRealeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-realera-ot-server" />;
}
